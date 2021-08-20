import React, { useContext, useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './styles/FormulaireAjoutInfirmier.css';
import { Adresse } from '../models/Adresse';
import { Infirmier } from '../models/Infirmier';
import { InfirmierProvider } from '../../../shared/contexts/InfirmierContext';
import { useHistory } from 'react-router-dom';

export const FormulaireAjoutInfirmier = () => {
    const [showMessage, setShowMessage] = useState(false);
    const {addInfirmier} = useContext(InfirmierProvider)
    const history = useHistory()
    const defaultValues = {
        nom: '',
        prenom: '',
        numeroProfessionnel: '',
        telPro: '',
        telPerso :'',
        numeroRue :'',
        rue :'',
        codePostal: '',
        ville: ''
    }
    const { control, formState: { errors }, handleSubmit, setFocus } = useForm({ defaultValues });

    useEffect(() => {
        setFocus("nom")
    }, [setFocus]);


    const onSubmit = (data) => {
        let adresse = new Adresse(data.numeroRue, data.rue, data.codePostal, data.ville)
        let infirmier = new Infirmier(data.nom, data.prenom, data.numeroProfessionnel, data.telPro, data.telPerso, adresse)
        addInfirmier(infirmier)
        history.push('/liste')
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Enregistrement effectué!</h5>
                </div>
            </Dialog>

            <div className="p-d-flex p-jc-center">
                <div className="card">
                    <h5 className="p-text-center">Formulaire d'enregistrement</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="nom" control={control} rules={{ required: 'Le nom est requis.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.nom} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="nom" className={classNames({ 'p-error': errors.name })}>Nom*</label>
                            </span>
                            {getFormErrorMessage('nom')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="prenom" control={control} rules={{ required: 'Le prenom est requis.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.prenom} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="prenom" className={classNames({ 'p-error': errors.name })}>Prenom*</label>
                            </span>
                            {getFormErrorMessage('prenom')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="numeroProfessionnel" control={control} rules={{ required: 'Le numéro professionnel est requis.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.numeroProfessionnel} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="numeroProfessionnel" className={classNames({ 'p-error': errors.name })}>Numéro professionnel*</label>
                            </span>
                            {getFormErrorMessage('numeroProfessionnel')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="telPro" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.telPro} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="telPro" className={classNames({ 'p-error': errors.name })}>Téléphone professionnel</label>
                            </span>
                            {getFormErrorMessage('telPro')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="telPerso" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.telPerso} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="telPerso" className={classNames({ 'p-error': errors.name })}>Téléphone personnel</label>
                            </span>
                            {getFormErrorMessage('telPerso')}
                        </div>
                            <Divider align="left" type="dashed">
                                <p>Adresse</p>
                            </Divider>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="numeroRue" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.numeroRue} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="numeroRue" className={classNames({ 'p-error': errors.name })}>Numéro de rue:</label>
                            </span>
                            {getFormErrorMessage('numeroRue')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="rue" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.rue} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                    )} />
                                <label htmlFor="rue" className={classNames({ 'p-error': errors.name })}>Nom de la rue:</label>
                            </span>
                            {getFormErrorMessage('rue')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="codePostal" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.codePostal} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="codePostal" className={classNames({ 'p-error': errors.name })}>Code postal:</label>
                            </span>
                            {getFormErrorMessage('codePostal')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="ville" control={control} render={({ field, fieldState }) => (
                                    <InputText id={field.ville} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="ville" className={classNames({ 'p-error': errors.name })}>Ville:</label>
                            </span>
                            {getFormErrorMessage('ville')}
                        </div>
                            <Button type="submit" label="Enregistrer" className="p-mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}