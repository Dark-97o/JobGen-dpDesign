import './AccreditationBand.css';

export function AccreditationBand() {
  return (
    <section className="accreditation-dark-band" aria-label="Statutory Architecture Accreditation">
      <div className="container accreditation-band-container">
        
        {/* Brand & Discipline Column */}
        <div className="band-brand-col">
          <div className="band-logo-title-row">
            <img 
              src="/dplogo.png" 
              alt="DP Design Studio Emblem" 
              className="band-dplogo" 
            />
            <div className="band-brand-text">
              <h2 className="band-brand-name">DP DESIGN STUDIOS</h2>
              <p className="band-disciplines">
                ARCHITECTURE · INTERIOR · PROJECT MANAGEMENT
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line on Desktop */}
        <div className="band-vertical-divider" aria-hidden="true"></div>

        {/* Statutory Accreditation Statement */}
        <div className="band-statement-col">
          <p className="band-statement-lead">
            <strong>NSW Architect Registration Board</strong> and <strong>Australian Institute of Architects</strong>.
          </p>
          <p className="band-statement-nomination">
            <strong>D. P. Perera</strong> is the nominated Architect, registration number <strong>12156</strong>.
          </p>
        </div>

        {/* Official Credential Seals (No surrounding squares, prominent sizing) */}
        <div className="band-credentials-col">
          <div className="band-cred-images">
            <img 
              src="/dpcred1.png" 
              alt="NSW Architects Registration Board Credential" 
              className="band-cred-img band-dpcred1" 
            />
            <img 
              src="/dpcred2.png" 
              alt="Australian Institute of Architects Member Credential" 
              className="band-cred-img band-dpcred2" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
