import React from "react"
import { Link } from "gatsby"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

const recentMatchObject = () => {
    const codeString = `
    [
        {
            "match_id": 0,
            "player_slot": 0,
            .
            .
            .
        }
    ]
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const recentMatchInterface = () => {
    const codeString = `
    interface RecentMatchData {
        match_id: number;
        player_slot: number;
        .
        .
        .
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const recentMatchFunctions = () => {
    const codeString = `
    private createRow() {

        const response = this.state.recentMatches;

        const handleResponse = response.map((matches) => {
            return this.recentMatchTemplate(matches);
        });

        return handleResponse;
    }

    private recentMatchTemplate(matches: RecentMatchData) {

        return (
            <Table.Row key={matches.match_id}>
                <Table.Cell width={4}>
                    {heroImage(matches.hero_id)}
                    {heroId(matches.hero_id)}
                </Table.Cell>
                <Table.Cell width={6}>
                    <Link to={'/matchpage/{matches.match_id}'}>
                        {matchResult(matches.player_slot, matches.radiant_win)}
                    </Link>
                </Table.Cell>
                <Table.Cell width={4}>
                    {showGameMode(matches.game_mode)}
                    <br />
                    {skillBracket(matches.skill)}
                </Table.Cell>
                <Table.Cell width={2}>
                    {matchDuration(matches.duration)}
                    <br />
                    Team
                </Table.Cell>
                <Table.Cell>{matches.kills}</Table.Cell>
                <Table.Cell>{matches.deaths}</Table.Cell>
                <Table.Cell>{matches.assists}</Table.Cell>
            </Table.Row>
        );
    }
    `;
    return (
        <SyntaxHighlighter language="javascript" style={monokai}>
            {codeString}
        </SyntaxHighlighter>
    );
};

const DotaProjectOverview = () => (
    <Layout>
        <SEO title="React Dota API Project" />

        <div>
            
            <h2>OpenDota API</h2>
            <p>
                {recentMatchObject()}
                {recentMatchInterface()}
                {recentMatchFunctions()}
            </p>

        </div>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default DotaProjectOverview;