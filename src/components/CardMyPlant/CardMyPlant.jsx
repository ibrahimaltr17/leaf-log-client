import React from 'react';
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CardMyPlant = ({ plantsData, plants, setPlants }) => {
    const { _id, photo, plant, category, health, careLevel } = plantsData;

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                fetch(`https://server-leaf-log.vercel.app/plants/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Plant has been deleted.",
                                icon: "success"
                            });

                            const remainingPlants = plants.filter(plan => plan._id !== _id);
                            setPlants(remainingPlants);
                        }
                    })


            }
        });
    }
    return (
        <div className='flex justify-between items-center flex-col md:flex-row space-y-3 rounded-3xl bg-white p-4'>
            <div>
                <img className='max-w-[200px] rounded-xl' src={photo} alt="" />
            </div>
            <div className='space-y-2'>
                <h4 className='text-2xl font-bold'>{plant}</h4>
                <p><span className='font-semibold'>Category: </span>{category}</p>
                <p><span className='font-semibold'>Care Level: </span>{careLevel}</p>
                <p><span className='font-semibold'>Health Status: </span>{health}</p>
            </div>
            <div className='flex md:flex-col px-2 gap-2'>
                <Link to={`/plants/${_id}`}>
                    <button className='btn bg-green-800 text-white'><FaEye /></button>
                </Link>

                <Link to={`/updatePlant/${_id}`}>
                    <button className='btn bg-gray-800 text-white'><FaEdit /></button>
                </Link>
                <button onClick={() => handleDelete(_id)} className='btn bg-red-600 text-white'><MdDelete /></button>
            </div>
        </div>
    );
};

export default CardMyPlant;