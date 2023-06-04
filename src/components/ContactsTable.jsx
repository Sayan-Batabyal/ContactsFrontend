import { DataGrid } from '@mui/x-data-grid';
import { ContactsCols} from "../utils/DataGridHeader.js"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ContactsTable = () => {
    const nav=useNavigate()
    const [list, setList] = useState([]);
    const { data } = useFetch("https://contactsapi.cyclic.app/api/contact")
  
    useEffect(() => {
      setList(data)
    }, [data])
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://contactsapi.cyclic.app/api/contact/${id}`);
        setList(list.filter((item) => item._id !== id));
      } catch (err) {
        throw err;
      }
  
    };

    const handleEdit = async (id) => {
        nav(`/edit/${id}`)
      };
  
    const action = [
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="flex gap-3">
              <div className="bg-yellow-300 px-3 cursor-pointer py-1 rounded-sm text-black" onClick={() => handleEdit(params.row._id)} >Edit</div>
              <div className="bg-red-600 px-3 py-1 cursor-pointer text-white rounded-sm  font-bold" onClick={() => handleDelete(params.row._id)} >Delete</div>
            </div>
          )
        }
      }
    ]
    return (
      <div className="datatable h-[600px] p-10">
        <DataGrid className="data"
          rows={list}
          columns={ContactsCols.concat(action)}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={row => row._id}
        />
      </div>
    )
}

export default ContactsTable