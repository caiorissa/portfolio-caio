import FadeContent from '../reactbits/FadeContent';
import SpotlightCard from '../ui/SpotlightCard';
import { studio } from '../../data/projects';

export default function Studio({ t, lang }) {
  const tagline = lang === 'pt' ? studio.tagline : studio.taglineEn;
  const description = lang === 'pt' ? studio.description : studio.descriptionEn;

  return (
    <section id="studio" style={{ padding: '80px 24px 128px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
        <FadeContent blur>
          <SpotlightCard glowColor="purple">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 40,
                alignItems: 'center',
                padding: 'clamp(28px, 5vw, 48px)',
                background: 'rgba(8, 8, 12, 0.5)',
                borderRadius: 20,
              }}
            >
              <div>
                <p
                  style={{
                    color: '#5227FF',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}
                >
                  {t.studio.eyebrow}
                </p>

                <h2
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 700,
                    color: 'white',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    marginBottom: 8,
                  }}
                >
                  {studio.name}
                </h2>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    marginBottom: 16,
                  }}
                >
                  {studio.partners}
                </p>

                <p
                  style={{
                    color: 'white',
                    fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    marginBottom: 16,
                  }}
                >
                  {tagline}
                </p>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 15,
                    lineHeight: 1.7,
                    marginBottom: 28,
                    maxWidth: 420,
                  }}
                >
                  {description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <a
                    href={studio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '14px 28px',
                      background: '#5227FF',
                      color: 'white',
                      fontWeight: 500,
                      borderRadius: 12,
                      textDecoration: 'none',
                      fontSize: 14,
                      transition: 'background 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#6b3fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#5227FF'; }}
                  >
                    {t.studio.cta}
                  </a>
                </div>
              </div>

              <a
                href={studio.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textDecoration: 'none' }}
                aria-label={studio.name}
              >
                <div
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.45)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '10px 14px',
                      background: 'rgba(0,0,0,0.6)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
                    <span
                      style={{
                        flex: 1,
                        marginLeft: 8,
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.35)',
                        textAlign: 'center',
                        letterSpacing: '0.02em',
                      }}
                    >
                      loomeeai.com
                    </span>
                  </div>
                  <img
                    src={studio.image}
                    alt={studio.name}
                    style={{ width: '100%', height: 'auto', display: 'block', verticalAlign: 'top' }}
                    draggable={false}
                  />
                </div>
              </a>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
}
