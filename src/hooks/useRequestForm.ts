import { FormEvent, ChangeEvent, useState } from 'react';
import { makeRequest } from '../services/fetch-utils';

const useRequestForm = (method: string) => {
    const [results, setResults] = useState<unknown>(null);
    const [address, setAddress] = useState('');
    const [body] = useState(null); 
    const [token] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        let response = await makeRequest(method, address, JSON.stringify(body), token);
        setResults(response || null);
        setAddress('');
    };

    return { results, address, handleInput, handleFormSubmit };

};

export default useRequestForm;