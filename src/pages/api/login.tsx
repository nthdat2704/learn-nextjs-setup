// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy, { ProxyResCallback } from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from "next";
import Cookies from 'cookies';
type Data = {
    message: string;
};
//thí config to when nextjs receive a request, it's don't make parser
export const config = {
    api: {
        bodyParser: false,
    }
}

const proxy = httpProxy.createProxyServer()
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: "method not supported" })
    }
    //make new promise to fix warning message when not have return response
    return new Promise((resolve, reject) => {
        //remove cookie before forward to api
        req.headers.cookie = ''
        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = '';
            proxyRes.on('data', (chunk) => {
                body += chunk

            })
            proxyRes.on('end', () => {
                try {
                    const { accessToken, expiredAt } = JSON.parse(body)
                    console.log(accessToken, expiredAt);
                    const cookies = new Cookies(req, res, { secure: true })
                    cookies.set("access_token", accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expiredAt)
                    });
                    (res as NextApiResponse).status(200).json({ message: 'login successfully' })


                } catch (error) {
                    (res as NextApiResponse).status(500).json({ message: 'some thing went wrong' })
                }
                resolve(true)
            })


        }
        // to fix warning message when not have return response
        proxy.once("proxyRes", handleLoginResponse)



        proxy.web(req, res, {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            //tell proxy handle response
            selfHandleResponse: true
        })


    })



}
