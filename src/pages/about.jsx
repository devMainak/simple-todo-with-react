import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header/>
      <main className='container'>
        <section className='pt-4 pb-5'>
          <h1>About Todos</h1>
          <p className='fs-5 fw-normal'>This is a Todo application built with React and React Router.</p>
          <p className='fs-5 fw-normal'>The Todo application is a simple yet powerful tool designed to help users organize their tasks and manage their daily activities effectively.</p>
          <p className='fs-5 fw-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='fs-5 fw-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default About;