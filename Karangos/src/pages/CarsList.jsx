import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

export default function CarsList(){
    // Aqui o estado é criado com valor inicial sendo um objeto de carros vazio
    const [state, setState] = useState({
        cars:{}
    })

    //Desestruturando as variáveis de estado
    const { cars } = state

    // Este useEffect() será executado apenas uma vez, durante o carregamento da página
    useEffect(() =>{
        loadData() //carrega os dados do back-end
    },[])

    async function loadData(){
        try {
            //Aqui a requisição é feita para a rota de carros
            const result = await fetch('https://api.faustocintra.com.br/cars')
            // Requisição ok
            if(result.ok) setState({...state, cars: await result.json()})

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
            field: 'brand',
            headerName: 'Marca',
            width: 100,
        },
        {
            field: 'model',
            headerName: 'Modelo',
            width: 150,
        },
        {
            field: 'color',
            headerName: 'Cor',
            width: 100,
        },
        {
            field: 'year_manufacture',
            headerName: 'Ano de Fabricação',
            width: 150,
            // Formata a data de padrão internacional para padrão BR
            valueFormatter: (params) => {
                if(params.value) return format(new Date(params.value), 'dd/MM/yyyy')
                else return ''
            }
        }, {
            field: 'imported',
            headerName: 'Importado',
            width: 150,
            // Formata os valores de 0 e 1 para Sim e não 
            valueFormatter: (params) => {
                if(params.value === "1") return 'Sim'
                else return 'Não'
            }
        }, {
            field: 'plates',
            headerName: 'Placas',
            width: 150,
        },{
            field: 'selling_price',
            headerName: 'Preço de Venda',
            width: 150,
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
        // Função que é chamada ao clicar no botão com ícone de lixeira, ele deleta o carro específico a partir do id
        if(confirm('Deseja realmente excluir este item?')){
            try {
                const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
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
                Listagem de carros
            </Typography>

            <Box sx={{
                display: 'flex',
                justifyContent: 'right',
                mb: '25px'
            }}>
                {/* Botão que redireciona para cadastrar um novo carro */}
                <Link to="new"> 
                    <Button
                    color='secondary'     
                    variant="contained" 
                    size='large'
                    startIcon={<AddBoxIcon />}   
                    >
                        Cadastrar novo carro
                    </Button>
                </Link>
               
            </Box>

            <Paper elevation={4} sx={{ height: 400, width: '100%', mt: '50px' }}>
                <DataGrid
                    rows={cars}
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