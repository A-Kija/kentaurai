import { useState } from 'react';

const useRegister = _ => {

    const [errors, setErrors] = useState({});

    const setServerErrors = err => {
        setErrors(err);
    }

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
        } else if (!/[0-9]/.test(form.psw)) {
            errorsBag.psw = 'Slaptažodis turi turėti bent vieną skaitmenį';
        } else if (!/[a-z]/.test(form.psw)) {
            errorsBag.psw = 'Slaptažodis turi turėti bent vieną mažają raidę';
        } else if (!/[A-Z]/.test(form.psw)) {
            errorsBag.psw = 'Slaptažodis turi turėti bent vieną didžiają raidę';
        }

        if (form.psw !== form.psw2 && !errorsBag.psw) {
            errorsBag.psw2 = 'Slaptažodžiai nesutampa';
        }

        return true;

        if (Object.keys(errorsBag).length === 0) {
            setErrors({});
            return true;
        }
        setErrors(errorsBag);
        return false;
    }





    return { errors, validate, setServerErrors }

}

export default useRegister;