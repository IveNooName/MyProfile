import "./IStealYourCreditCard.css";


function IStealYourCreditCard() {
    return (
        <div className="isteal-your-credit-card">
            <h1 className={"h1"}>You want to help me maintaining the site?</h1>

            <p>If you want to help me with the Site, fill out this form:</p>

            <div className="input-group py-1">
                <div className="form-floating">
                    <input className="form-control" type="text" id="credit-card-full-name" placeholder="Name"/>
                    <label htmlFor="credit-card-full-name">Full Name</label>
                </div>

                <div className="form-floating">
                    <input className="form-control" type="text" id="credit-card-iban" placeholder=""
                           spellCheck="false"/>
                    <label htmlFor="credit-card-iban">IBAN</label>
                </div>
            </div>
            <div className="input-group py-1">
                <div className="form-floating">
                    <input className="form-control" type="text" autoComplete="cc-exp" id="credit-card-expiration-date"
                           placeholder=""/>
                    <label htmlFor="credit-card-expiration-date">Expiration date</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" type="number" autoComplete="cc-cvv" id="credit-card-cvv"
                           placeholder=""/>
                    <label htmlFor="credit-card-cvv">CVV</label>
                </div>
            </div>
            <div className={"credit-card-button-container py-4"}>
                <button className="btn btn-primary credit-card-button" type="submit">Submit</button>
            </div>
        </div>
    );
}

export default IStealYourCreditCard;
