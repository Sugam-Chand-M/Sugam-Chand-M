/** @type {import('next').NextConfig} */
const nextConfig = {
    // this is for using images from online link
    // images:{
    //     remotePatterns:[
    //         {
    //             protocol:"https",
    //             hostname:""
    //         }
    //     ]
    // },
    experimental:{
        serverActions:true,
    }
};

export default nextConfig;
