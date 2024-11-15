import '../../App.css'

interface Iinfo{
    img: string,
    nome: string,
    descricao: string,
    preco: number,
}

export default function Input(prop: Iinfo) {
    return(
        <>
            <div className="card">
                <img className='img-produto' src={prop.img} alt="foto do produto" />

                <div>
                    <p className='nome-produto'>{prop.nome}</p>
                    <p className='desc-produto'>{prop.descricao}</p>
                    <p className='preco-produto'>R$ {prop.preco}</p>
                </div>
            </div>
        </>
    )
}
