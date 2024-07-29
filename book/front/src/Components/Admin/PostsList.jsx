import { useEffect, useState, useContext, useCallback } from 'react';
import useServerGet from '../../Hooks/useServerGet';
import useServerDelete from '../../Hooks/useServerDelete';
import { ModalsContext } from '../../Contexts/Modals';
import * as l from '../../Constants/urls';

export default function PostsList() {

    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_GET_POSTS);
    const { doAction: doDelete, serverResponse: serverDeleteResponse } = useServerDelete(l.SERVER_DELETE_POST);
    const { setDeleteModal } = useContext(ModalsContext);
    const [posts, setPosts] = useState(null);

    const hidePost = post => {
        setPosts(p => p.map(p => p.id === post.id ? { ...p, hidden: true } : p));
    }

    const showPost = useCallback(_ => {
        setPosts(p => p.map(p => {
            delete p.hidden;
            return p;
        }));
    }, []);

    const removeHidden = useCallback(_ => {
        setPosts(p => p.filter(p => !p.hidden));
    }, []);

    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setPosts(serverGetResponse.serverData.posts ?? null);
    }, [serverGetResponse]);

    useEffect(_ => {
        if (null === serverDeleteResponse) {
            return;
        }
        if (serverDeleteResponse.type === 'error') {
            showPost();
        } else {
            removeHidden();
        }
    }, [serverDeleteResponse, showPost, removeHidden]);


    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Straipsnių sąrašas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    posts === null && <h3>Palaukite, siunčiamas straipsnių sąrašas...</h3>
                }
                {
                    posts !== null && <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Pavadinimas</th>
                                    <th>Nuotrauka</th>
                                    <th>Ar pagrindinis</th>
                                    <th>Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(p =>
                                        p.hidden
                                            ? null
                                            : <tr key={p.id}>
                                                <td>{p.title}</td>
                                                <td>
                                                    {
                                                        p.photo === null
                                                            ?
                                                            <img style={{height: '70px', width: 'auto'}} src={l.SERVER_IMAGES_URL + 'no-image.png'} alt="nėra nuotraukos" />
                                                            :
                                                            <img style={{height: '70px', width: 'auto'}} src={l.SERVER_IMAGES_URL + p.photo} alt={p.name} />
                                                    }
                                                </td>
                                                <td>{p.is_top ? 'Pagrindinis' : ''}</td>
                                                <td className="two">
                                                    <ul className="actions special">
                                                        <li><a href={l.POST_EDIT + '/' + p.id} className="button small">redaguoti</a></li>
                                                        <li><input onClick={_ => setDeleteModal({
                                                            data: p,
                                                            doDelete,
                                                            hideData: hidePost,
                                                        })}
                                                            type="button"
                                                            value="ištrinti"
                                                            className="small" />
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Viso straipsnių: {posts.filter(p => !p.hidden).length}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
            </section>
        </>
    );
}