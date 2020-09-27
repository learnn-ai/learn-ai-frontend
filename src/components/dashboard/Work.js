import React, { Component } from "react";
import VideoPlayer from "./VideoPlayer";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import "../../styles/Workspace.css"
import { Layout, Row, Col } from "antd";
import Nav from "./Nav"
import api from "../api";
import { Scrollbars } from "react-custom-scrollbars";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Typography, PageHeader } from "antd";
import styles from "../../styles/webstyle.modules.css";
const { Content } = Layout;
const Heading = Typography.Title;

class Workspace extends Component {
    constructor(props) {
        super(props);
        this.videoTag = React.createRef()
      }
    
    componentDidMount() {
        navigator.mediaDevices
          .getUserMedia({video: true, audio: false})
          .then(stream => this.videoTag.current.srcObject = stream)
          .catch(console.log);
    }

    render() {
        const currentTodo = this.props.location.state;
        console.log(currentTodo.todo.url)


        return (
            <div>
            <Layout style={{ minHeight: "100vh" }}>
                <Nav />
                < Layout style={{ padding: "24px 24px 24px 24px" }
                }>

                    <Content style={{ background: "white", padding: "16px 24px" }}>
                        {/* <Title
                            spaceName={this.props.match.params.spaceName}
                            currSpace={currSpace}

                        /> */}
                        <Heading level={2}>The next outbreak?</Heading>
                        <Row gutter={[16, 16]} >
                            <Col span={12} >
                                <VideoPlayer currentTodo={currentTodo} />
                                <NoteInput currSpace={currentTodo} />
                                <NoteList currSpace={currentTodo} />
                            </Col>
                            <Col span={12}>

                                <Tabs className="transcript">
                                    <TabList>
                                        <Tab>Transcript</Tab>
                                        <Tab>Summary</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <table width="100%" className="tblSpaces">
                                            <colgroup>
                                                <col width="30%" />
                                                <col width="45%" />
                                                <col width="25%" />
                                                <col width="" />
                                            </colgroup>
                                            <tbody>
                                                <tr>

                                                    <td>00:09</td>

                                                    <td>
                                                        When I was a kid, the disaster we worried about most was a nuclear war. That's why we had a barrel like this down in our basement, filled with cans of food and water. When the nuclear attack came, we were supposed to go downstairs, hunker down, and eat out of that barrel.                                                          </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        00:29
                                                    </td>
                                                    <td>
                                                        Today the greatest risk of global catastrophe doesn't look like this. Instead, it looks like this. If anything kills over 10 million people in the next few decades, it's most likely to be a highly infectious virus rather than a war. Not missiles, but microbes. Now, part of the reason for this is that we've invested a huge amount in nuclear deterrents. But we've actually invested very little in a system to stop an epidemic. We're not ready for the next epidemic.                                                     </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        01:11
                                                    </td>
                                                    <td>
                                                        Let's look at Ebola. I'm sure all of you read about it in the newspaper, lots of tough challenges. I followed it carefully through the case analysis tools we use to track polio eradication. And as you look at what went on, the problem wasn't that there was a system that didn't work well enough, the problem was that we didn't have a system at all. In fact, there's some pretty obvious key missing pieces.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        01:42
                                                    </td>
                                                    <td>
                                                        We didn't have a group of epidemiologists ready to go, who would have gone, seen what the disease was, seen how far it had spread. The case reports came in on paper. It was very delayed before they were put online and they were extremely inaccurate. We didn't have a medical team ready to go. We didn't have a way of preparing people. Now, Médecins Sans Frontières did a great job orchestrating volunteers. But even so, we were far slower than we should have been getting the thousands of workers into these countries. And a large epidemic would require us to have hundreds of thousands of workers. There was no one there to look at treatment approaches. No one to look at the diagnostics. No one to figure out what tools should be used. As an example, we could have taken the blood of survivors, processed it, and put that plasma back in people to protect them. But that was never tried.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        02:45
                                                    </td>
                                                    <td>
                                                        So there was a lot that was missing. And these things are really a global failure. The WHO is funded to monitor epidemics, but not to do these things I talked about. Now, in the movies it's quite different. There's a group of handsome epidemiologists ready to go, they move in, they save the day, but that's just pure Hollywood.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        03:13
                                                    </td>
                                                    <td>
                                                        The failure to prepare could allow the next epidemic to be dramatically more devastating than Ebola Let's look at the progression of Ebola over this year. About 10,000 people died,  and nearly all were in the three West African countries. There's three reasons why it didn't spread more. The first is that there was a lot of heroic work by the health workers. They found the people and they prevented more infections. The second is the nature of the virus. Ebola does not spread through the air. And by the time you're contagious, most people are so sick that they're bedridden. Third, it didn't get into many urban areas. And that was just luck. If it had gotten into a lot more urban areas, the case numbers would have been much larger.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        04:09
                                                    </td>
                                                    <td>
                                                        So next time, we might not be so lucky. You can have a virus where people feel well enough while they're infectious that they get on a plane or they go to a market. The source of the virus could be a natural epidemic like Ebola, or it could be bioterrorism. So there are things that would literally make things a thousand times worse.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        04:30
                                                    </td>
                                                    <td>
                                                        In fact, let's look at a model of a virus spread through the air, like the Spanish Flu back in 1918. So here's what would happen: It would spread throughout the world very, very quickly. And you can see over 30 million people died from that epidemic. So this is a serious problem. We should be concerned.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        04:55
                                                    </td>
                                                    <td>
                                                        But in fact, we can build a really good response system. We have the benefits of all the science and technology that we talk about here. We've got cell phones to get information from the public and get information out to them. We have satellite maps where we can see where people are and where they're moving. We have advances in biology that should dramatically change the turnaround time to look at a pathogen and be able to make drugs and vaccines that fit for that pathogen. So we can have tools, but those tools need to be put into an overall global health system. And we need preparedness.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        05:33
                                                    </td>
                                                    <td>

                                                        The best lessons, I think, on how to get prepared are again, what we do for war. For soldiers, we have full-time, waiting to go. We have reserves that can scale us up to large numbers. NATO has a mobile unit that can deploy very rapidly. NATO does a lot of war games to check, are people well trained? Do they understand about fuel and logistics and the same radio frequencies? So they are absolutely ready to go. So those are the kinds of things we need to deal with an epidemic.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        06:04
                                                    </td>
                                                    <td>
                                                        What are the key pieces? First, we need strong health systems in poor countries. That's where mothers can give birth safely, kids can get all their vaccines. But, also where we'll see the outbreak very early on. We need a medical reserve corps: lots of people who've got the training and background who are ready to go, with the expertise. And then we need to pair those medical people with the military. taking advantage of the military's ability to move fast, do logistics and secure areas. We need to do simulations, germ games, not war games, so that we see where the holes are. The last time a germ game was done in the United States was back in 2001, and it didn't go so well. So far the score is germs: 1, people: 0. Finally, we need lots of advanced R&amp;D in areas of vaccines and diagnostics. There are some big breakthroughs, like the Adeno-associated virus, that could work very, very quickly.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        07:12
                                                    </td>
                                                    <td>
                                                        Now I don't have an exact budget for what this would cost, but I'm quite sure it's very modest compared to the potential harm. The World Bank estimates that if we have a worldwide flu epidemic, global wealth will go down by over three trillion dollars and we'd have millions and millions of deaths. These investments offer significant benefits beyond just being ready for the epidemic. The primary healthcare, the R&amp;D, those things would reduce global health equity and make the world more just as well as more safe.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        07:47
                                                    </td>
                                                    <td>

                                                        So I think this should absolutely be a priority. There's no need to panic. We don't have to hoard cans of spaghetti or go down into the basement. But we need to get going, because time is not on our side.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        08:00
                                                    </td>
                                                    <td>
                                                        In fact, if there's one positive thing that can come out of the Ebola epidemic, it's that it can serve as an early warning, a wake-up call, to get ready. If we start now, we can be ready for the next epidemic. Thank you. (Applause)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </TabPanel>
                                    <TabPanel>
                                        <h3>NATO does a lot of war games to check, are people well trained? Do they understand about fuel and logistics and the same radio frequencies? So they are absolutely ready to go. If we start now, we can be ready for the next epidemic. You can have a virus where people feel well enough while they're infectious that they get on a plane or they go to a market. So those are the kinds of things we need to deal with an epidemic. We need a medical reserve corps: lots of people who've got the training and background who are ready to go, with the expertise. And then we need to pair those medical people with the military. We're not ready for the next epidemic. So we can have tools, but those tools need to be put into an overall global health system. Over 30 million people died from the Ebola epidemic. The failure to prepare could allow the next epidemic to be dramatically more devastating than Ebola.</h3>
                                    </TabPanel>
                                </Tabs>
                            </Col>
                        </Row>
                    </Content>
                </Layout >
            </Layout>
            <video id="video" class="booth"className={styles.booth} width="250" height="200" draggable="true"
                ref={this.videoTag}
                autoPlay
            />
            </div>
        );
    }
}

export default Workspace;