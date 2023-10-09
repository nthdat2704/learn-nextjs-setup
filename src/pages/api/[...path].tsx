// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import httpProxy from 'http-proxy';
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
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
    //make new promise to fix warning message when not have return response
    return new Promise((resolve, reject) => {
        //remove cookie before forward to api
        req.headers.cookie = ''
        proxy.web(req, res, {
            target: 'https://js-post-api.herokuapp.com',
            changeOrigin: true,
            //tell proxy handle response
            selfHandleResponse: false
        })
        // to fix warning message when not have return response
        proxy.once("proxyRes", () => {
            resolve(true);
        })


    })



}
