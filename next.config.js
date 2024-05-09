/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    trailingSlash: true,

    images: {
        unoptimized: true,
    },
    env: {
        BASE_URL: "https://api.praharssolution.in/api/",
        // BASE_URL: "http://localhost:3001/api/",

        USER_ID: "ZAJSIOWIAUYSBWNDJHSYDYEY",
        TOKEN_ID: "WIEUSHNBSBDBDHGDEYSYUSU"
    },

}

module.exports = nextConfig
