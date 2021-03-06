import React, { Component } from 'react';
import './skill.css';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import Roll from 'react-reveal/Roll';
class Skills extends Component {
  state = {
    skillsabilities: [
      { index: '1', skab: '--Programming Languages Known - C, C++, Java, Python' },
      { index: '2', skab: '--Web Development Languages Known - HTML, CSS, JavaScript,Bootstrap, PHP, React, Node.js, Mysql, Mongodb' },
      { index: '3', skab: '--Web Development Skills Using MERN' },
      { index: '4', skab: '--Time Management and Organizational Skills' }
    ]
  }
  render() {
    return (
      <div className='row Descr pt-3 pb-3'><br />
        <Flash>
          <div className='offset-1 deschead'>S<br />K<br />I<br />L<br />L<br />S</div>
        </Flash>
        <RubberBand>
          <div className='divsk offset-1'></div>
        </RubberBand>
        <div className='offset-1 col-8'>{this.state.skillsabilities.map(edct => {
          return (
            <div key={edct.index}>
              <Roll left cascade>
                <div className='skill'>{edct.skab}</div>
              </Roll>
            </div>
          );
        })}</div></div>);
  }
}

export default Skills;