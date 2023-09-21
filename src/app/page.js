import React from 'react'
import Hero from './components/Hero'
import Content from './components/Content'
import "./page.module.css"
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <Content image = "/Content01.png" title="An invite only place with plenty of room to talk" desc="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a grouo chat."/>
      <Content reverse = {true} image = "/Content02.png" title="Where hanging out is easy" desc="Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to."/>
      <Content image = "/Content03.png" title="From a few to a fandom" desc="Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more."/>
      <Content flexDirection="column-reverse" customStyle = {{ display: "flex" , flexDirection: "column" , alignItems : "center" }} image = "/Content04.png" title="Reliable tech for staying close" desc="Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share."/>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default page