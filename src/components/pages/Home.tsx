import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className='card mr-10 ml-10 mt-4 mb-4 pl-6 pr-6' style={{backgroundColor: 'rgb(167,198,246)'}}>
				<h1 className="text-center p-3">Welcome to <span style={{fontSize: '40px'}}>Regulate!</span></h1>
				<p>
                Whether you're a parent, caregiver, or friend of a child with autism, it's important to know how best to care for them. A schedule can be an incredibly helpful and grounding tool for a child with autism, as it provides structure and predictability, which can reduce anxiety and help them feel more comfortable and in control.</p>
                <br></br>
                <p>Here are some general tips for creating a schedule for a child with autism:</p>
                <br></br>

                    <ul style={{marginLeft: '5%'}}>
                        <li>~ Use visual aids: Many children with autism are visual learners and respond well to visual aids such as pictures or symbols. Use these to represent different activities or tasks in the schedule.</li>
                        <br></br>
                        <li>~ Be consistent: Try to keep the schedule consistent from day to day, as this can help the child feel more secure and less anxious.</li>
                        <br></br>
                        <li>~ Allow for flexibility: While consistency is important, it's also important to allow for some flexibility in the schedule, as unexpected things can happen. Make sure the child understands that sometimes the schedule may need to change.</li>
                        <br></br>
                        <li>~ Include breaks and downtime: Make sure to include plenty of breaks and downtime in the schedule, especially if the child is prone to sensory overload or needs time to recharge.</li>
                        <br></br>
                        <li>~ Involve the child: Depending on the child's age and level of understanding, involve them in the process of creating the schedule. This can help them feel more in control and invested in following the schedule.</li>
                    </ul>
        
					<br/>               

                <p>Remember that every child is unique, and what works for one child may not work for another. Be open to adjusting the schedule as needed, and seek the advice of a healthcare professional or therapist if you have any concerns.</p>
					<br/>

                <p className="text-center">Ready to get started?</p>
                <div className="button is-responsive is-outlined is-rounded is-hovered navbar-item" style={{backgroundColor: 'rgb(255,78,135)', marginTop: '10px', marginRight: '38%', marginLeft: '38%'}}>
                    <Link to="/tasks">Start a Schedule!</Link>
            </div>
					<br/>
			</div>
        </>
    )
}