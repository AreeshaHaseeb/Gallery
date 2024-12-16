import image from "../assets/background-image.jpg";
const About = () => {
    return (
        <div
            style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "86vh",
            width: "100%",
            }}
        >
            <div>
                    <h1>About Us</h1>
                    <p>We're all about Hollywood and the magic of movies! 
                        From thrilling action to laugh-out-loud comedies, we love celebrating the stories 
                        that bring us together. Whether it's a classic favorite or the latest blockbuster,
                        we believe every movie has a way of making life a little more fun. Sit back, relax, 
                        and enjoy the show with us!</p>
            </div>
        </div>
)
}
export default About;
