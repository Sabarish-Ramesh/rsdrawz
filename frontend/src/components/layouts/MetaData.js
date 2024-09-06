import { Helmet } from "react-helmet-async"

export default function MetaData({title}) {
    return (
        <Helmet>
            <title>{`${title} - RSDrawz`}</title>
        </Helmet>
    )
}