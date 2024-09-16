module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 8192,
                        }
                    },
                ],
                type: 'asset/resource',
            },
        ]
    },
}