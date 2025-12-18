import logo from "./newlogo.png"
import video1 from "./home-page-banner.mp4";
import video2 from "./remove-background-animation-v1_1.mp4";
import people_og from "./people-og.webp"
import people from "./people.webp"
import product_org from "./product-org.webp"
import product from "./product.webp"
import car_og from "./car-og.webp"
import car from "./car.webp"
import animal_og from "./animal.webp"
import animal from "./animal-2.webp"
import slide_icon from "./slide_icon.png"

export const assets={
    logo,
    video1,
    video2,
    people_og,
    people,
    product_org,
    product,
    car_og,
    car,
    animal_og,
    animal,
    slide_icon

};

export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description:
        `First, choose the image you want to remove background from by clicking on 
        "Start from a photo". Your image format can be PNG or JPG. 
        We support all image dimensions.`,
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description:
        `Our tool automatically removes the background from your image.
        Next, you can choose a background color.
        Our most popular options are white and transparent backgrounds,
        but you can pick any color you like.`,
    },
    {
        step: "Step 3",
        title: "Download your image",
        description:
        `After selecting a new background color, download your photo and you're done!
        You can also save your picture in the Photoroom App by creating an account.`,
    },
];

export const categories = ["People", "Products","Animal", "Car"];

export const imageMap = {
    People: {
        before: assets.people_og,
        after: assets.people,
    },
    Products: {
        before: assets.product_org,
        after: assets.product,
    },
    Animal: {
        before: assets.animal_og,
        after: assets.animal,
    },
    Car: {
        before: assets.car_og,
        after: assets.car,
    },
};

export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: 499,
        credits: "100 credits",
        description: "Perfect for personal projects, quick edits, and casual image background removal.",
        popular: false
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: 899,
        credits: "300 credits",
        description: "Ideal for creators and businesses needing high-quality visuals at scale.",
        popular: true
    },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 1499,
        credits: "1000 credits",
        description: "Built for enterprises and power users requiring maximum output and performance.",
        popular: false
    }
];



