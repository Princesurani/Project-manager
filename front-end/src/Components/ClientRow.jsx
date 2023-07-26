import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutation'
import { GET_CLIENTS } from '../queries/clientQueries'
// import { useQuery } from '@apollo/client';
// import { GET_PROJECTS } from '../queries/projectQueries';
// import { DELETE_PROJECT } from '../mutations/projectMutations';
// import { useNavigate } from 'react-router-dom';





function ClientRow({ client }) {



    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }],
    });
    const onSubmit = (e) => {
        e.preventDefault();
        deleteClient();


    };
    return (
        <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={onSubmit}>
                    <FaTrash />
                    
                </button>
            </td>

        </tr>
    )
}

export default ClientRow