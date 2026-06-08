import {
  faAngular,
  faDocker,
  faJava,
  faKubernetes,
  faNodeJs,
  faPostgresql,
  faReact,
  faTailwindCss,
  faTypescript,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconType } from 'react-icons';
import {
  SiApachemaven,
  SiGit,
  SiGithubactions,
  SiJasmine,
  SiJunit5,
  SiMongodb,
  SiSap,
  SiSpringboot,
} from 'react-icons/si';

interface Skill {
  name: string;
  iconType?: 'fontawesome' | 'react-icons';
  icon: IconDefinition | IconType;
}

interface SkillsSectionProps {
  id?: string;
  title?: string;
  headerHeight?: number;
}

export default function SkillsSection({ id, title, headerHeight = 0 }: SkillsSectionProps) {
  return (
    <section className="flex w-full flex-col gap-y-2 border-t border-slate-300 pb-12 md:items-center md:gap-y-2 dark:border-zinc-700">
      <div id={id} style={{ height: headerHeight, width: '100%' }}></div>

      {title && (
        <a href={`#${id}`} target="_top">
          <span className="cursor-pointer text-3xl/loose font-light text-slate-950 dark:text-slate-300">
            {title}
          </span>
        </a>
      )}

      <div className="w-full">
        <div
          id={id}
          className="flex w-full flex-col rounded-md border border-slate-300 bg-slate-100 shadow-md md:grid md:grid-cols-3 md:grid-rows-1 md:items-center dark:border-zinc-700 dark:bg-zinc-800"
        >
          <SkillsSectionColumn
            title="Frontend"
            skills={[
              { name: 'Angular', icon: faAngular, iconType: 'fontawesome' },
              { name: 'SAP Spartacus', icon: SiSap, iconType: 'react-icons' },
              { name: 'React', icon: faReact, iconType: 'fontawesome' },
              { name: 'TypeScript', icon: faTypescript, iconType: 'fontawesome' },
              { name: 'Tailwind CSS', icon: faTailwindCss, iconType: 'fontawesome' },
              { name: 'Jasmine / Karma', icon: SiJasmine, iconType: 'react-icons' },
            ]}
          />
          <SkillsSectionColumn
            title="Backend"
            skills={[
              { name: 'Java', icon: faJava, iconType: 'fontawesome' },
              { name: 'Spring Boot', icon: SiSpringboot, iconType: 'react-icons' },
              { name: 'Node.js', icon: faNodeJs, iconType: 'fontawesome' },
              { name: 'SQL', icon: faPostgresql, iconType: 'fontawesome' },
              { name: 'MongoDB', icon: SiMongodb, iconType: 'react-icons' },
              { name: 'JUnit', icon: SiJunit5, iconType: 'react-icons' },
            ]}
          />
          <SkillsSectionColumn
            title="DevOps & Tools"
            skills={[
              { name: 'Git - GitHub', icon: SiGit, iconType: 'react-icons' },
              { name: 'GitHub Actions', icon: SiGithubactions, iconType: 'react-icons' },
              { name: 'Docker', icon: faDocker, iconType: 'fontawesome' },
              { name: 'Kubernetes', icon: faKubernetes, iconType: 'fontawesome' },
              { name: 'Maven', icon: SiApachemaven, iconType: 'react-icons' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function SkillsSectionColumn({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="col-span-1 flex h-full w-auto flex-col items-start justify-start gap-6 p-8">
      <h3 className="w-full border-b border-slate-300 pb-2 text-sm font-bold text-slate-600 uppercase dark:border-zinc-700 dark:text-zinc-300">
        {title}
      </h3>
      <div className="flex flex-col flex-wrap gap-3">
        {skills.map((skill, index) => {
          const isFontAwesome = skill.iconType === 'fontawesome';
          const IconComponent = !isFontAwesome ? (skill.icon as IconType) : undefined;

          return (
            <div key={index} className="flex flex-row items-center justify-start gap-3">
              <div className="max-w-4.5 text-xs">
                {isFontAwesome ? (
                  <FontAwesomeIcon
                    icon={skill.icon as IconDefinition}
                    size="xl"
                    className="max-w-4.5 min-w-4.5 text-slate-800 dark:text-zinc-300"
                  />
                ) : (
                  IconComponent && (
                    <IconComponent
                      size={18}
                      className="max-w-4.5 min-w-4.5 text-slate-800 dark:text-zinc-300"
                    />
                  )
                )}
              </div>
              <p className="text-xs text-slate-800 dark:text-zinc-300">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
