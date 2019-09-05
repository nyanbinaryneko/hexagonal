import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255)
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.svg'), linear-gradient(${randomCssRgba()}, ${randomCssRgba()})`,
          }}
        >
          <div className="box"
          style={{
            backgroundColor: '#fef6d0'
          }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                color: '#992409',
                padding: '1rem',
              }}
            >
              Latest Stories
            </h1>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
