import FeaturedBox from "./FeaturedBox/FeaturedBox"
import FeaturedSlider from "./Slider/FeaturedSlider"

const FeaturedProducts = () => {
    return (
        <div className="flex mx-12 justify-center my-7">
            <FeaturedSlider />
            <div className=" flex flex-col items-center justify-center w-full content-center">

                <FeaturedBox 
                imageLink={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1755099566_2.jpg?im=Resize=(768,448)"} 
                 sizeClass="w-[475px] h-[240px]" />

                <FeaturedBox
                Btnwidth={"full"} 
                imageLink={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1755099673_5.jpg?im=Resize=(768,448)"} 
                sizeClass="w-[475px] h-[240px]" />

            </div>
        </div>
    )
}

export default FeaturedProducts
