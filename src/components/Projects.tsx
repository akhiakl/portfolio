import { getAssetData } from '@/service/contentful/assets';
import type { Asset } from '@/generated/graphql/graphql';
import { FragmentType, useFragment } from '@/generated/graphql';
import { ProjectFragment } from '@/service/contentful/fragments';
import ContentfulImage from './ContentfulImage';

interface ProjectsProps {
    project: FragmentType<typeof ProjectFragment>
}

export default function Projects(props: ProjectsProps) {
    const project = useFragment(ProjectFragment, props.project);
    return (
        <section className="relative" id="projects">
            <div className="space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    {project.description && (
                        <div className="mt-4 text-lg text-gray-600">
                            {/* Add rich text renderer for project.description.json */}
                            <p>{JSON.stringify(project.description.json)}</p>
                        </div>
                    )}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
                        {project.thumbnail && (
                            <div className="aspect-video">
                                <ContentfulImage asset={project.thumbnail} fill />
                            </div>
                        )}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            {project.description && (
                                <div className="mt-2 text-gray-600">
                                    {/* Add rich text renderer for project.description.json */}
                                    <p>{JSON.stringify(project.description.json)}</p>
                                </div>
                            )}

                            {project.techStackCollection?.items && project.techStackCollection.items.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-sm font-medium text-gray-500">Technologies</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.techStackCollection.items.map((tech) => (
                                            <span
                                                key={tech?.sys.id}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100"
                                            >
                                                {tech?.icon &&
                                                    <ContentfulImage
                                                        asset={tech?.icon}
                                                        className="w-4 h-4 mr-2"
                                                        width={16}
                                                        height={16}
                                                    />
                                                }
                                                {tech?.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {(project.liveUrl || project.repoUrl) && (
                                <div className="mt-6 flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            View Live
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}