import {Component} from "react";
import axios from 'axios';
import styled from 'styled-components';

const SpeechBanner = styled.p`
 font-size: 40px;
 color: red;
 margin-bottom: 30px;
`;

// get
export async function getServerSideProps() {
  const response = await axios.get(`https://reqres.in/api/users?page=2`).then(r => {
    return r.data
  })
  return {
    props: {
      data: response
    },
  };
}

class About extends Component<{ data: any }> {

  render() {
    return <div><SpeechBanner>About</SpeechBanner></div>
  }
}

export default About
