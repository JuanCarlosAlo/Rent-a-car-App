import {BannerContainer, BannerImage, BannerTextWrap} from "./styles"

const Banner = () => {
return(
<section>
    <BannerContainer>
        <BannerTextWrap>
            <h1>BANNER TITLE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste, magnam quae incidunt animi dolorum eveniet placeat corrupti! Enim dolores beatae possimus reprehenderit ducimus eos aperiam temporibus exercitationem recusandae nulla.</p>
        </BannerTextWrap>
        <BannerImage src="/assets/placeholder.jpg" alt="" />
    </BannerContainer>
</section>
)
}

export default Banner