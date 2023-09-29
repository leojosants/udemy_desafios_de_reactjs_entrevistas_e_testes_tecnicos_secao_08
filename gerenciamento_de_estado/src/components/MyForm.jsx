import { Field, Form } from 'react-final-form';

const required = (value) => (value ? undefined : 'Campo obrigatório.');

const mustBeNumber = (value) => isNaN(value) ? 'Deve ser um número.' : undefined;

const minValue = (min) => (value, allValues) => {
    if (allValues.parent_name) {
        return undefined;
    }

    return isNaN(value) || value >= min ? undefined : `Deve ser maior que ${min}`;
};

function composeValidators(...validators) {
    return (...args) => validators.reduce((error, validator) => error || validator(...args), undefined);
}

const MyForm = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <Field name='fisrt_name' validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="text" placeholder='Digite o nome...' />
                                    {
                                        meta.error && meta.touched && <p>{meta.error}</p>
                                    }
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="last_name">Sobrenome</label>
                        <Field name='last_name' validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="text" placeholder='Digite o sobrenome...' />
                                    {
                                        meta.error && meta.touched && <p>{meta.error}</p>
                                    }
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <Field name='email' validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="email" placeholder='Digite o e-mail...' />
                                    {
                                        meta.error && meta.touched && <p>{meta.error}</p>
                                    }
                                </div>
                            )}
                        </Field>
                    </div>

                    <div>
                        <label htmlFor="age">Idade</label>
                        <Field name='age' validate={composeValidators(required, mustBeNumber, minValue(18))}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="text" placeholder='Digite a idade...' />
                                    {
                                        meta.error && meta.touched && <p>{meta.error}</p>
                                    }
                                </div>
                            )}
                        </Field>
                    </div>

                    {
                        values.age && values.age < 18 && (
                            <div>
                                <label htmlFor="parent_name">Nome do responsável</label>
                                <Field name='parent_name' validate={required}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder='Nome do seu responsável...' />
                                            {
                                                meta.error && meta.touched && <p>{meta.error}</p>
                                            }
                                        </div>
                                    )}
                                </Field>
                            </div>
                        )
                    }

                    <div className="buttons">
                        <button type='submit' disabled={submitting || pristine}>Enviar</button>
                        <button type='button' onClick={form.reset}>Resetar</button>
                    </div>
                </form>
            )}
        />
    );
};

export default MyForm;