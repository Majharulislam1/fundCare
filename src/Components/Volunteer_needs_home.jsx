import { useEffect, useState } from "react";
import Volunteer_home_card from "./Volunteer_home_card";
import { Link } from "react-router-dom";



const Volunteer_needs_home = () => {


  const [volunteer, setVolunteer] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/volunteer_needs')
      .then(res => res.json())
      .then((data) => {
        setVolunteer(data)
        setLoading(false);
      })
      .catch(() => {

        setLoading(false);
      });
  }, [])


  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className='w-4/5 mx-auto py-10'>
        <div className="text-center">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold text-title mb-4">Volunteer Needs</h1>
          <p className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto text-paragraph"> Join us in providing essential healthcare services to underserved communities. Help with medical camps,  </p>
        </div>


        <div className="py-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {
            volunteer.map(data => <Volunteer_home_card post={data} key={data._id}></Volunteer_home_card>)
          }
        </div>

        <div className="flex justify-center items-center">
          <Link to='/all_volunteer'>
            <button className="text-lg font-semibold px-6 rounded-lg py-2 text-white bg-secondary">See All</button>
          </Link>
        </div>

      </div>


    </div>
  );
};

export default Volunteer_needs_home;