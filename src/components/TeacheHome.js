import React, { useEffect } from 'react';
// import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import Students from "../assets/img1.png";
import Lessons from "../assets/subjects.svg";
import Tests from "../assets/assignment.svg";
import Time from "../assets/time.svg";
// import { useDispatch, useSelector } from 'react-redux';
// import { getClassStudents, getSubjectDetails } from '../../redux/sclassRelated/sclassHandle';

const TeacherHomePage = () => {
    // const dispatch = useDispatch();

    // const { currentUser } = useSelector((state) => state.user);
    // const { subjectDetails, sclassStudents } = useSelector((state) => state.sclass);

    // const classID = currentUser.teachSclass?._id;
    // const subjectID = currentUser.teachSubject?._id;

    // useEffect(() => {
    //     dispatch(getSubjectDetails(subjectID, "Subject"));
    //     dispatch(getClassStudents(classID));
    // }, [dispatch, subjectID, classID]);

    // const numberOfStudents = sclassStudents && sclassStudents.length;
    // const numberOfSessions = subjectDetails && subjectDetails.sessions;
    const numberOfStudents = 0;
    const numberOfSessions = 0;

    return (
        <div className="max-w-6xl mx-auto mt-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between items-center h-48">
                    <img src={Students} alt="Students" className="mb-2" />
                    <h2 className="text-xl">Class Students</h2>
                    <CountUp start={0} end={numberOfStudents} duration={2.5} className="text-green-600 text-2xl" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between items-center h-48">
                    <img src={Lessons} alt="Lessons" className="mb-2" />
                    <h2 className="text-xl">Total Lessons</h2>
                    <CountUp start={0} end={numberOfSessions} duration={5} className="text-green-600 text-2xl" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between items-center h-48">
                    <img src={Tests} alt="Tests" className="mb-2" />
                    <h2 className="text-xl">Tests Taken</h2>
                    <CountUp start={0} end={24} duration={4} className="text-green-600 text-2xl" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between items-center h-48">
                    <img src={Time} alt="Time" className="mb-2" />
                    <h2 className="text-xl">Total Hours</h2>
                    <CountUp start={0} end={30} duration={4} suffix="hrs" className="text-green-600 text-2xl" />
                </div>
                {/* <div className="col-span-1 md:col-span-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <SeeNotice />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default TeacherHomePage;
