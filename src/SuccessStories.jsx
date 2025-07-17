const SuccessStories = () => {
  const stories = [
    {
      title: "Project Showcase",
      description:
        "Explore our client projects to gain insights into our diverse portfolio. From mobile apps to SaaS platforms, we have a proven track record of delivering high-quality software solutions tailored to our clients' requirements.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Our Work",
      description:
        "View our project showcase to witness the breadth and depth of our software expertise. Our projects span mobile app development, web solutions, SaaS implementations, and more.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Client Testimonials",
      description:
        "Read testimonials from our satisfied clients who have experienced the impact of our software solutions firsthand. Join our list of successful partnerships and elevate your business with Satyos Solutions.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our case studies to see how we have helped businesses like yours achieve their software goals and
            enhance their digital presence.
          </p>
        </div>
        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-bold text-black mb-4">{story.title}</h3>
                <p className="text-gray-600 leading-relaxed">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
