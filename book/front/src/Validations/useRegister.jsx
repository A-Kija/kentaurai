import { useState } from 'react';

const useRegister = _ => {

    const [errors, setErrors] = useState({});

    const validate = form => {

        const errorsBag = {};
        if (form.name.length <= 3) {
            errorsBag.name = 'Vardas per trumpas. Minimalus ilgis 3 simboliai';
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            errorsBag.email = 'El pašto formatas neteisingas';
        }

        if (form.psw.length <= 8) {
            errorsBag.psw = 'Slaptažodis per trumpas. Minimalus ilgis 8 simboliai';
        } else if (!/[0-9]/.test.psw) {
            errorsBag.psw = 'Slaptažodis turi turįti bent vieną skaitmenį';
        }







        if (Object.keys(errorsBag).length === 0) {
            setErrors({});
            return true;
        }
        setErrors(errorsBag);
        return false;

    }





    return { errors, validate }

}

export default useRegister;