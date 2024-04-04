import { Github, MailOpen, MapPin, Twitter } from "lucide-react";
import Header from "../common/Header";
import Description from "../common/Description";
import Button from "../common/Button";
import Tooltip from "../common/Tooltip";

interface ProfileProps {
    name: string;
    description?: string;
    location?: string;
    image: string;
    email?: { name: string; link: string };
    medium: {
        github: { name: string; link: string };
        twitter: { name: string; link: string };
    };
}

export function Profile({ profile }: { profile: ProfileProps }) {
    return (
        <div className="flex justify-between items-center gap-x-4 p-3">
            <div className="flex-1 space-y-2">
                <Header>{profile.name}</Header>
                <ProfileDescription profile={profile} />
                <ProfileLinks email={profile.email!} medium={profile.medium} />
            </div>
            <ProfileImage image={profile.image} />
        </div>
    );
}

export const ProfileDescription = ({ profile }: { profile: ProfileProps }) => {
    return (
        <Description>
            {profile.description ?? null}
            {profile.location && (
                <div className="max-w-md font-light text-base tracking-wider text-neutral-600 flex items-center gap-x-2 mt-3">
                    <MapPin size={20} className="inline" />
                    <p className="font-inter mt-1">{profile.location}</p>
                </div>
            )}
        </Description>
    );
};

export const ProfileLinks = ({
    medium,
    email,
}: {
    medium: ProfileProps["medium"];
    email: ProfileProps["email"];
}) => {
    return (
        <div className="flex gap-x-3 text-gray-600 pt-2">
            <Tooltip content="Github">
                <ProfileLinkButton link={medium.github.link}>
                    <Github strokeWidth={1.75} />
                </ProfileLinkButton>
            </Tooltip>
            <Tooltip content="Twitter">
                <ProfileLinkButton link={medium.twitter.link}>
                    <Twitter strokeWidth={1.75} />
                </ProfileLinkButton>
            </Tooltip>
            <Tooltip content="Email">
                {email && <MailButton link={email.link} />}
            </Tooltip>
        </div>
    );
};

export const ProfileImage = ({ image }: { image: ProfileProps["image"] }) => {
    return (
        <div className="size-28">
            <img className="w-full h-full rounded-xl" src={image} alt="profile" />
        </div>
    );
};

export const MailButton = ({ link }: { link: string }) => {
    return (
        <a href={link} target="_blank">
            <Button>
                <MailOpen />
            </Button>
        </a>
    );
};

export const ProfileLinkButton = ({
    link,
    children,
}: {
    link: string;
    children: React.ReactNode;
}) => {
    return (
        <a className="" href={link} target="_blank">
            <Button>{children}</Button>
        </a>
    );
};
