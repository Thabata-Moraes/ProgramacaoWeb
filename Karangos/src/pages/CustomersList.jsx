import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

export default function CustomerList(){
    const [state, setState] = useState({
        customers:{}
    })

    //Desestruturando as variáveis de estado
    const { customers } = state

    // Este useEffect() será executado apemas uma vez, durante o carregamento da página
    useEffect(() =>{
        loadData() //carrega os dados do back-end
    },[])

    async function loadData(){
        try {
            const result = await fetch('https://api.faustocintra.com.br/customers')
            // Requisição ok
            if(result.ok) setState({...state, customers: await result.json()})

            //Requisição com erro
            else throw new Error(`[HTTP ${result.status} ${result.statusText}]`)
        }
        catch(error){
            // Exibimos o erro no console
            console.error(error);
        }
    }

    const columns = [
        {   field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Nome',
            width: 300,
        },
        {
            field: 'ident_document',
            headerName: 'CPF',
            align: 'center',
            headerAlign: 'center',
            width: 150,
        },
        {
            field: 'birth_date',
            headerName: 'Data nasc.',
            headerAling: 'center',
            width: 100,
            valueFormatter: (params) => {
                if(params.value) return format(new Date(params.value), 'dd/MM/yyyy')
                else return ''
            }
        },
        {
            field: 'city',
            headerName: 'Município/UF',
            width: 300,
            // colocando dois campos na mesma célula
            valueGetter: params => params.row.city + '/' + params.row.uf 
        }, {
            field: 'phone',
            headerName: 'Celular',
            headerAling: 'center',
            aling: 'center',
            width: 150,
        }, {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },{
            field: 'edit',
            headerName: 'Editar',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params => 
            <Link to={'./'+ params.id}>
                <IconButton aria-label='Editar'>
                    <EditIcon/>
                </IconButton>
            </Link>
        },{
            field: 'delete',
            headerName: 'Excluir',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params => 
            <IconButton 
                aria-label='Deletar'
                onClick={()=> handleDeleteButtonClick(params.id)}
            >
                <DeleteForeverIcon color='error'/>
            </IconButton>
            
        },
    ];

    async function handleDeleteButtonClick(id){
        if(confirm('Deseja realmente excluir este item?')){
            try {
                const result = await fetch(`https://api.faustocintra.com.br/customers/${id}`, {
                    method: 'DELETE'
                })
                if(result.ok) loadData()
                alert('Exclusão efetuada com sucesso')
            }
            catch(error){
                console.error(error)
            }
        }
    }



    return (
        <>
            <Typography variant='h1'>
                Listagem de clientes
            </Typography>

            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                mb: '25px'
            }}>
                <Link to="new">
                    <Button
                    color='secondary'     
                    variant="contained" 
                    size='large'
                    startIcon={<AddBoxIcon />}   
                    >
                        Cadastrar novo cliente
                    </Button>
                </Link>
               
            </Box>

            <Paper elevation={4} sx={{ height: 400, width: '100%', mt: '50px' }}>
                <DataGrid
                    rows={customers}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Paper>
        </>
    )
}