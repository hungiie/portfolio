"use client"

interface Props {
    visibility: string;
}

export default function JackalopeResearchContent(props: Props) {
    return (
        <div className={`px-13 py-13 rounded-2xl bg-[var(--colour-grey)] mt-7 ${props.visibility}`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-20`}>
                <div className="">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">User study: Recruiting, Goals, Interviewing.</p>
                    <p className="text-md text-[var(--colour-bodytext)] w-full mb-2">I selectively recruited 3 new international students at SFU as participants for this user testing to ensure our insights reflect the app&lsquo;s primary target audience.</p>
                    <p className="text-md text-[var(--colour-bodytext)] w-full mb-2">Being new to the university, these participants are more likely to actively seek events and communities, making their feedback particularly relevant in assessing the app’s usability and effectiveness in addressing their needs.</p>
                    <p className="text-md text-[var(--colour-bodytext)] w-full mb-2">We conducted our research with 3 interviews: 2 in-person interviews and 1 online interview.</p>
                </div>

                <div className="">
                    <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mb-8">Through the user testing, we aim to observe:</p>
                    <p className="text-md text-[var(--colour-bodytext)] w-full mb-2">1) How easily can users achieve their goals of discovering and engaging with events and communities?</p>
                    <p className="text-md text-[var(--colour-bodytext)] w-full mb-2">2) How effectively do users utilize the app&lsquo;s AI features, and how well do these features enhance their experience?</p>
                </div>
            </div>
            <p className="text-2xl font-semibold text-[var(--colour-bodytext)] mt-15 mb-8">Issues found from testing</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mb-5">
                <div className="bg-[var(--background)] px-10 py-10 rounded-2xl">
                    <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-8">Issue 1</p>
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-8">Difficulty navigating through the site or app, stuck in some areas like the &ldquo;Join Group&ldquo; or messages.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">Frequency: <span className="text-[var(--colour-jackalope)]">Frequent</span></p>
                    <p className="text-md text-[var(--colour-bodytext)]">Severity: <span className="text-[var(--colour-jackalope)]">High</span></p>
                </div>
                <div className="bg-[var(--background)] px-10 py-10 rounded-2xl">
                    <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-8">Issue 2</p>
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-8">Users fail to notice additional sections in the AI suggestion carousel due to lack of indicators.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">Frequency: <span className="text-[var(--colour-jackalope)]">Frequent</span></p>
                    <p className="text-md text-[var(--colour-bodytext)]">Severity: <span className="text-[var(--colour-jackalope)]">Moderate</span></p>
                </div>
                <div className="bg-[var(--background)] px-10 py-10 rounded-2xl">
                    <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-8">Issue 3</p>
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-8">When AI malfunctions, it fails to provide satisfactory or additional information after unsatisfactory inputs.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">Frequency: <span className="text-[var(--colour-jackalope)]">Periodically</span></p>
                    <p className="text-md text-[var(--colour-bodytext)]">Severity: <span className="text-[var(--colour-jackalope)]">Low to moderate</span></p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                <div className="bg-[var(--background)] px-10 py-10 rounded-2xl">
                    <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-8">Outcome 1</p>
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-8">Navigation issue from community messages tabs to homepage.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">When the user is having difficulties navigating the app’s pages, their frustration might make them lose interest in exploring the rest of the app.</p>
                </div>
                <div className="bg-[var(--background)] px-10 py-10 rounded-2xl">
                    <p className="text-sm text-[var(--colour-jackalope)] font-semibold mb-8">Outcome 2</p>
                    <p className="text-xl text-[var(--colour-bodytext)] font-semibold mb-8">Fail to fully utilize AI&lsquo;s feature due to unclear visual indicators.</p>
                    <p className="text-md text-[var(--colour-bodytext)] mb-2">If some features, like the AI, are not clearly available to the user, they may not realize that the feature is part of the app or they could be confused on where the feature could be.</p>
                    <p className="text-md text-[var(--colour-bodytext)]">This leads to the user not using the app to its full potential that could leave them feeling frustrated and confused.</p>
                </div>
            </div>
        </div>
    )
}