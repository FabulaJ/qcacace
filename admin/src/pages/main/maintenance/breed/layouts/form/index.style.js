export const btnicon = {
    color: '#ffffff',
    backgroundColor: '#d1d1d1',
    borderRadius: '7px',
    padding: {
        xs: '5px 12px',
        md: '4px 10px'
    },
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#adadad' }
}

export const card = {
    padding: '30px 15px',
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: 'solid 1px #919eab40',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' }
}

export const input = {
    border: 'solid 1px #dfe4ea',
    padding: {
        xs: '6px 8px',
        md: '8px 10px'
    },
    marginBottom: '5px',
    borderRadius: '5px'
}

export const error = {
    color: '#e84118'
}

export const select = {
    border: 'solid 1px #dfe4ea',
    padding: {
        xs: '9px 8px',
        md: '10px 10px'
    },
    marginBottom: '5px',
    borderRadius: '5px'
}

export const textarea = {
    border: 'solid 1px #dfe4ea',
    borderRadius: '5px',
    fontFamily: 'Gilroy Light',
    fontSize: '105%',
    padding: '10px',
    outline: 'none',
    textTransform: 'uppercase',
    color: '#353b48'
}

export const btntxt = { 
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#204c6f',
    color: '#ffffff',
    borderRadius: '7px',
    padding: '7px 0',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { backgroundColor: '#1b405d' }
}