import './category.scss';
import Input from '../../components/formulaire/input-form.jsx';
import Button from '../../components/button/button.jsx';

const Category = () => {
    return (
        <div className="category">
            <div className="category__form">
                <h2 className='category__form__label'>Création de Categorie</h2>
                <form action="">
                    <Input name={'nom'} label={'Nom'} type={'text'} placeholder={'Entrer le nom'} />
                    <div className='category__form__btn'>
                        <Button name="Valider" />
                    </div>
                </form>
            </div>
            <div className="category__list">
                <h2 className='category__list__label'>Liste des Categories</h2>
                
                <div className='category__list__dialog'>
                    <ul>
                        <li>1</li>
                        <li>Camion</li>
                        <li><i className="bi bi-arrow-clockwise"></i></li>
                        <li><i className="bi bi-trash3"></i></li>
                    </ul>
                </div>

                <div className='category__list__dialog'>
                    <ul>
                        <li>1</li>
                        <li>Camion</li>
                        <li><i className="bi bi-arrow-clockwise"></i></li>
                        <li><i className="bi bi-trash3"></i></li>
                    </ul>
                </div>

                <div className='category__list__dialog'>
                    <ul>
                        <li>1</li>
                        <li>Camion</li>
                        <li><i className="bi bi-arrow-clockwise"></i></li>
                        <li><i className="bi bi-trash3"></i></li>
                    </ul>
                </div>

                <div className='category__list__dialog'>
                    <ul>
                        <li>1</li>
                        <li>Camion</li>
                        <li><i className="bi bi-arrow-clockwise"></i></li>
                        <li><i className="bi bi-trash3"></i></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Category;