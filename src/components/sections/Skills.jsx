import FadeContent from '../reactbits/FadeContent';
import AnimatedList from '../reactbits/AnimatedList';
import GlassSurface from '../reactbits/GlassSurface';
import { skills } from '../../data/projects';

const skillGlassProps = {
  width: '100%',
  height: 'auto',
  borderRadius: 12,
  borderWidth: 0.06,
  brightness: 35,
  opacity: 0.85,
  blur: 24,
  backgroundOpacity: 0.2,
  saturation: 1.4,
};

export default function Skills({ t, lang }) {
  const skillItems = skills.map((skill) => (
    <GlassSurface key={skill.name} {...skillGlassProps}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '14px 16px',
          width: '100%',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <img src={skill.icon} alt={skill.name} style={{ width: 32, height: 32, objectFit: 'contain' }} />
        </div>
        <div>
          <h4 style={{ color: 'white', fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{skill.name}</h4>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{lang === 'pt' ? skill.desc : skill.descEn}</p>
        </div>
      </div>
    </GlassSurface>
  ));

  return (
    <section style={{ padding: '80px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
        <FadeContent blur>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: 48, textAlign: 'center', letterSpacing: '-0.02em' }}>
            {t.skills.title}
            <span style={{ color: '#5227FF' }}>.</span>
          </h2>
        </FadeContent>

        <FadeContent blur delay={0.2}>
          <div style={{ width: '100%' }}>
            <AnimatedList items={skillItems} className="flex flex-col gap-3" staggerDelay={0.12} />
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
