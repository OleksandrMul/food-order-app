import React from 'react'
import AboutImage from '../assets/masala.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo
          sodales, posuere mi eget, gravida eros. Aliquam id elementum neque.
          Integer aliquet sollicitudin gravida. Nulla facilisi. Etiam facilisis
          sollicitudin semper. Etiam in dui eu est luctus auctor eu interdum
          nisi. Sed eu bibendum massa. Sed dolor eros, laoreet vitae dictum sit
          amet, iaculis a risus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed blandit lacus in justo venenatis, ut hendrerit
          neque ullamcorper. Quisque lectus urna, laoreet sed sagittis a,
          consectetur at magna. Etiam in neque aliquam lectus dapibus tristique.
          Praesent bibendum mi eu blandit interdum. Etiam condimentum gravida
          mauris, a sagittis libero commodo et. Maecenas at metus non quam
          pulvinar consequat. Pellentesque ornare felis nulla, nec congue tortor
          tempus interdum. Nulla sed mollis eros. Phasellus imperdiet nunc eros,
          a accumsan nisi eleifend in. Vivamus sollicitudin pulvinar lacinia.
          Proin in diam tellus. Vestibulum rutrum nec neque sed finibus. Donec
          vitae sapien mollis, interdum diam a, vestibulum nisi. Morbi sit amet
          egestas risus.
        </p>
      </div>
      <div className='bot'></div>
    </div>
  )
}

export default About
