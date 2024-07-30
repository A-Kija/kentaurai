import { useContext, useEffect, useState, useRef } from 'react';
import { RouterContext } from '../../Contexts/Router';
import useServerGet from '../../Hooks/useServerGet';
import useServerPut from '../../Hooks/useServerPut';
import * as l from '../../Constants/urls';
import Input from '../Forms/Input';
import Image from '../Forms/Image';
import Textarea from '../Forms/Textarea';
import { LoaderContext } from '../../Contexts/Loader';
import { rem } from '../../Constants/icons';

export default function PostEdit() {

    const { params } = useContext(RouterContext);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_EDIT_POST);
    const { doAction: doPut, serverResponse: serverPutResponse } = useServerPut(l.SERVER_UPDATE_POST);
    const [post, setPost] = useState(null);
    const { setShow } = useContext(LoaderContext);
    const [imageName, setImageName] = useState('No image');


    useEffect(_ => {
        doGet('/' + params[1]);
    }, [doGet, params]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setPost(serverGetResponse.serverData.post ?? null);
    }, [serverGetResponse]);

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
                setImageName('No image');
            })
    }

    const clearImage = _ => {
        imageInput.current.value = null;
        setPost(p => ({ ...p, photo: null }));
        setImageName('No image');
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
                        <h1>Straipsnio Redagavimas</h1>
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
                                        <Input onChange={handleForm} value={post.title} type="text" name="title" />
                                    </div>
                                    <div className="col-12">
                                        <Textarea onChange={handleForm} value={post.preview} type="text" name="preview" />
                                    </div>
                                    <div className="col-12">
                                        <Textarea onChange={handleForm} value={post.content} type="text" name="content" />
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