import React from 'react';

class Training extends React.Component
{
    render()
    {
        return (
            <div className="tab-content" id="training">
                <div id="training-body">
                    <div className="training">
                        <div className="text-mid text-neon">Cloud LDAP Maestro: <span className="text-xsmall text-ash">Engineered a cloud LDAP directory with multi-stage binding and OAuth-secured service accounts, powering enterprise-scale integrations across Zoho applications.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Customer IAM DRI: <span className="text-xsmall text-ash">Served as IAM DRI for high-scale enterprise onboarding, resolving critical IAM challenges that directly enabled deal closures.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Sign-in Revamp: <span className="text-xsmall text-ash">Revamped the Zoho Sign-in Engine for mobile app sign-in, device authentication, and IAM flows with factor enrollment.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Key-Pair Architect: <span className="text-xsmall text-ash">Architected versioned key-pair infrastructure for secure inter-service authentication across 200+ services in 10 global data centers with full backward compatibility.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Authentication Scalability Pro:<span className="text-xsmall text-ash">Delivered POP/IMAP authentication with failure-throttling, scaling to ~1M failed attempts/day without service impact.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Stateless Scheduler Guru: <span className="text-xsmall text-ash">Implemented stateless scheduler tokens, eliminating server-side state dependency and boosting job execution security.</span></div>
                    </div>
                    <div className="training">
                        <div className="text-mid text-neon">Session Security Champion: <span className="text-xsmall text-ash">Enhanced session validation with suspicious-access detection, preventing ~1,000 credential-abuse attempts daily.</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Training;