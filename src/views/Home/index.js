import { useEffect } from "react";
import { usePageState } from "contexts/page/PageContext";
import { FormattedMessage } from "react-intl";

const Home = () => {
    const [_, pageDispatch] = usePageState()
    useEffect(() => {
        pageDispatch({
            type: "PAGE_ADD",
            payload: {
                name: "home"
            }
        })
    }, [])
    return (
        <>
            <h3><FormattedMessage id="home"/></h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius, eros a rhoncus laoreet, lectus eros convallis ipsum, ullamcorper auctor nisi lacus eget massa. Integer dapibus bibendum odio, eu vestibulum ex. Aliquam viverra nisl id dolor commodo, id dignissim ligula aliquet. Sed dui orci, efficitur vel lorem id, dapibus accumsan neque. Nam viverra mi sed felis condimentum varius. Proin sit amet auctor lectus, a ultricies massa. Maecenas non purus quis ligula accumsan maximus. Aenean posuere aliquam lectus non pretium. Proin in ultrices tellus. Sed vitae augue lacinia nisi consequat molestie vel sed leo. Donec elit dui, vulputate eu bibendum nec, consectetur nec lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse scelerisque est id ante mattis malesuada. In hac habitasse platea dictumst. Nunc molestie leo nec tellus iaculis, id varius turpis cursus. Praesent nec ultricies quam, at pretium justo.
            </p>
        </>
    );
}

export default Home;