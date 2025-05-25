import GetStartedBtn from "../GetStartedBtn";
import "../../styles/Testimonials.css"

const TestimonalCard = ({testimonial, img_size}) => {
    return (
        <li className="testimonial-card">
            <img className="test-img" style={{height: img_size, width: img_size}} src={`./images/${testimonial.avatar}`} alt={testimonial.name} />
            <p className="test-name">{testimonial.name}</p>
            <p className="test-testimonial">{testimonial.testimonial}</p>
        </li>
    )
}

const TestimonalsSection = () => {
  const testimonials = [
    {
      name: "Anisha Li",
      avatar: "avatar-anisha.png",
      testimonial:
        "“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      name: "Ali Bravo",
      avatar: "avatar-ali.png",
      testimonial:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      name: "Richard Watts",
      avatar: "avatar-richard.png",
      testimonial:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”",
    },
    {
      name: "Shanai Gough",
      avatar: "avatar-shanai.png",
      testimonial:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];
  return (
  <section className="testimonials">
    <div className="testimonials-heading">
        <h4 className="">What they've said</h4>
    </div>
    <ul className="testimonials-list">
        {
            testimonials.map((testimonial, index) => (
                <TestimonalCard testimonial={testimonial} img_size={"50px"} key={index}/>
            ))
        }
    </ul>
    <div className="mx-auto">
      <GetStartedBtn className="mx-auto get-started-red-btn"/>
    </div>
  </section>
);
};

export default TestimonalsSection;
