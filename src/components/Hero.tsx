import RichtextRenderer from './RichtextRenderer';
import { FragmentType, useFragment } from '@/generated/graphql';
import { ProfileFragment } from '@/service/contentful/fragments';
import ContentfulImage from './ContentfulImage';


interface HeroProps {
    profile: FragmentType<typeof ProfileFragment>
}

export default function Hero(props: HeroProps) {
    const profile = useFragment(ProfileFragment, props.profile)
    return (
        <section className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        {profile.name && (
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">{profile.name}</h1>
                        )}
                        {profile.title && (
                            <h2 className="text-2xl md:text-3xl text-gray-600">{profile.title}</h2>
                        )}
                        {profile.location && (
                            <p className="text-lg text-gray-500 mt-2">{profile.location}</p>
                        )}
                    </div>

                    {profile.bio && (
                        <div className="text-lg text-gray-600 leading-relaxed">
                            {/* Add rich text renderer for profile.bio.json */}
                            <RichtextRenderer document={profile.bio.json} />
                        </div>
                    )}

                    {profile.profileLinksCollection?.items && profile.profileLinksCollection.items.length > 0 && (
                        <div className="flex gap-4">
                            {profile.profileLinksCollection?.items?.map((link) =>
                                link?.url ? (
                                    <a
                                        key={link.sys.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        {link.platformName}
                                    </a>
                                ) : null
                            )}
                        </div>
                    )}
                </div>

                {profile.profilePhoto && (
                    <div className="relative aspect-square">
                        <ContentfulImage asset={profile.profilePhoto}
                            className="object-cover rounded-lg shadow-xl"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
