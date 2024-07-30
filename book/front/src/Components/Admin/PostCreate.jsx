import { useContext, useEffect, useState, useRef } from 'react';
import useServerPost from '../../Hooks/useServerPost';
import * as l from '../../Constants/urls';
import Input from '../Forms/Input';
import Image from '../Forms/Image';
import Textarea from '../Forms/Textarea';
import { LoaderContext } from '../../Contexts/Loader';
import { rem } from '../../Constants/icons';

export default function PostEdit() {


    const { doAction: doPut, serverResponse: serverPutResponse } = useServerPost(l.SERVER_STORE_POST);
    const [post, setPost] = useState({ title: '', preview: '', content: '', photo: null });
    const { setShow } = useContext(LoaderContext);
    const [imageName, setImageName] = useState('Nuotrauka nepasirinkta');




    useEffect(_ => {
        if (null === serverPutResponse) {
            return;
        }
        if ('success' === serverPutResponse.type) {
            window.location.hash = l.POSTS_LIST;
        }
    }, [serverPutResponse]);

    const handleForm = e => {
        setPost(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    const imageInput = useRef();

    const imageReader = img => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleImage = e => {
        imageReader(e.target.files[0])
            .then(res => {
                setPost(p => ({ ...p, photo: res }));
                setImageName(imageInput.current.value.replace('C:\\fakepath\\', ''));
            })
            .catch(_ => {
                setPost(p => ({ ...p, photo: null }));
                setImageName('Nuotrauka nepasirinkta');
            })
    }

    const clearImage = _ => {
        imageInput.current.value = null;
        setPost(p => ({ ...p, photo: null }));
        setImageName('Nuotrauka nepasirinkta');
    }

    const submit = _ => {
        //TODO: Validation
        setShow(true);
        doPut(post);
    }

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Naujas straipsnis</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    null === post && <h3>Palaukite, siunčiami straipsnio duomenys...</h3>
                }
                {
                    null !== post && <div className="row aln-center">
                        <div className="col-8 col-8-large col-10-medium col-12-small">
                            <form>
                                <div className="row gtr-uniform">
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={post.title} type="text" name="title" label="Pavadinimas" />
                                    </div>
                                    <div className="col-12">
                                        <Textarea onChange={handleForm} value={post.preview} type="text" name="preview" label="Trumpai" />
                                    </div>
                                    <div className="col-12">
                                        <Textarea onChange={handleForm} value={post.content} type="text" name="content" label="Straipsnio tekstas" />
                                    </div>
                                    <div className="col-12">
                                        <Image handleImage={handleImage} imageInput={imageInput} imageName={imageName} image={post.photo} clearImage={clearImage} rem={rem} name="photo" />
                                    </div>

                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input onClick={submit} type="button" value="Išsaugoti" className="primary" /></li>
                                            <li><a className="button" href={'/' + l.POSTS_LIST}>Visi straipsniai</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </section>

        </>
    );

}