import React, { Component } from "react";
//import styles from "../styles/Common.module.css";
import Layout from "./components/Layout";

export default class about extends Component {
  render() {
    return (
      <Layout>
      {/*   <div className="m-3">
        <h1 className="text-center">About Page</h1>
        </div> */}

        <div className="m-5">
          <div class="jumbotron ">
            <h1 class="display-4">About Danan !</h1>
            <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            debitis inventore natus quos. Ipsam quae illum, ad facere veniam
            velit molestiae fugit earum in ratione dicta aperiam cumque iure
            ipsa, corrupti distinctio? Excepturi earum at sint aut, asperiores
            nulla dicta ab amet veniam ea ad voluptates perspiciatis quae?
            Dolores, distinctio.
            </p>
            <hr class="my-4" />
        {/*     <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p> */}
          </div>
        <div className="m-5">
          <div class="jumbotron ">
            <h1 class="display-4 text-right">what's new in Danan ?</h1>
            <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            debitis inventore natus quos. Ipsam quae illum, ad facere veniam
            velit molestiae fugit earum in ratione dicta aperiam cumque iure
            ipsa, corrupti distinctio? Excepturi earum at sint aut, asperiores
            nulla dicta ab amet veniam ea ad voluptates perspiciatis quae?
            Dolores, distinctio.
            </p>
            <hr class="my-4" />
          </div>
        </div>
        </div>
      </Layout>
    );
  }
}
