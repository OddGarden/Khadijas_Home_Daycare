import React, { Component } from 'react';
import { Container} from "react-bootstrap";
import {Heading} from './home'

export class About extends Component {
    render() {
        return (
            <Container className="App">

                <Heading msg="Business Hours"/>
                <p>
                    We are open 7 days a week. Enrollment schedule is
                    based on each families individual childcare work/school
                    needs and do not reflect the actual hours of operation.
                    Once your childcare hours are stated you must stay within
                    the time frame as to avoid possible overlapping with another
                    families schedule. Your contracted hours are not necessarily
                    the same as another families.
                </p>

                <Heading msg="Arrival & Departure Procedure"/>
                <p>
                    Please be sure to sign your child in upon arrival and sign out upon departure.
                    Please accompany your child into the center and assist them with taking off
                    their jacket and shoes (if necessary). Shoes are to be removed upon entering
                    the daycare and please teach your child to put their shoes, coats and other
                    personal belongings away. Please let us know of any authorized person
                    allowed to pick you child(ren). If we are not notified we will not release your
                    child(ren) regardless of whether the child(ren) is familiar with the individual(s).
                    This is for the safety of all the children under our care.
                </p>

                <Heading msg="Gun, Tobacco, Alcohol & Illegal Substance"/>
                <p>
                    Use of the above items is prohibited our day care facility at all times for
                    the provider, employees and parents of the children. A child will not be
                    released at pick-up to an adult shows signs of being incapable or under the
                    influence of an illegal substance. The authories will be notified immediately.
                    This is for the safety of everyone that is welcomed into our home.
                </p>
               
                <Heading msg="Communication"/>
                <p>
                    We understand that life happens and are always available to assist with your childcare
                    needs as they arise. Please let us know if plans change. Kids worry and so do we. We
                    would appreicate it if we were made aware of any significant issues that may alter your
                    routine. On the other hand, we will always let you know in advance if a situations arises
                    that will not enable us to provide care for your loved one(s). Since we are well staffed,
                    we do not anticipate any sudden changes but again keep in mind that situations do arise that
                    may be beyond out control.
                </p>
              
                <Heading msg="Holidays & Closings"/>
                <p>
                    We will be closed on the following days so please make plans accordingly:
                    <ul>
                        <li>New Years Day</li>
                        <li>Martin Luther King Jr. Day</li>
                        <li>Presidents Day</li>
                        <li>Good Friday</li>
                        <li>Easter</li>
                        <li>Memorial Day </li>
                        <li>Independence Day</li>
                        <li>Labor Day</li>
                        <li>Columbus Day</li>
                        <li>Veteran's Day </li>
                        <li>Thanksgiving Day and the day after</li>
                        <li>Christmas Day and the day after</li>
                        <li>New Years Eve</li>
                    </ul>
                </p>
                <p>
                    We also have family vacations at least once a year. We will notify all
                    parents weeks ahead of time so that you can make arrangements for your child(ren)'s
                    care.<strong>It is your responsibility as the parent/guardian to have alternate child care
                    plans in cases of emergency or schedule holidays and closings</strong>
                </p>
              
                <Heading msg="Vaccination & Illness Policies"/>
                <p>
                    We are a Washington State licensed daycare and as such all children are  required to be
                    vaciannated. <strong>No exceptions.</strong> You are required to your child(ren) immunization
                    records at the time of enrollement. Please note we will not be able to start care for your loved
                    one until we have received said records.
                </p>
                <p>
                    Children, who have a temperature of 100+, vomiting, diarrhea, or any contagious disease such
                    as the flu, H1N1 virus, chicken pox, mumps, measles, a hacking cough and a constant runny nose
                    or are showing signs that are out of the ordinary for your child, please keep them home and call
                    their doctor to find out what you should do. <strong>No exceptions.</strong> If during our care we
                    notice that your child is running a temperature; we will contact you immediately to pick up your child. If
                    your child(ren)'s conditions warrants it, we will not hesitate to contact 911 to provide immediate assitance.
                    We do provide care for children of all ages (including infants) at our home and as such we can not take care
                    of sick children and expose the other children under our care to any contagious disease.
                </p>
              
                <Heading msg="Visitation"/>
                <p>
                    Parents and family members are always welcome to visit our home. Please ring the doorbell when you arrive and sign-in
                    with one of us. If your visit is during nap-time, please be mindful not to wake the child(ren) up.
                </p>
              
                <Heading msg="Nap/Quiet Time"/>
                <p>
                    <strong>We do not force or punish any child that does not want to take a nap.</strong> We do have scheduled nap times
                    especially for the younger children. If your child(ren) isn't napping, they will be observing quiet time where they will
                    lay down with a book or some art supplies(e.g coloring book & crayons). We will use our indoor voices to communicate so that we do not disrupt
                    nap time for those resting.
                </p>
               
                <Heading msg="Meal & Snack Information"/>
                <p>
                    Parents of infants are to provide all their basic needs, such as: all-ready prepared formula, juice, diapers,
                    wet wipes, bibs, 2 change of clothes and baby food. Once a child turns one year of age, we will provide
                    all meals and snacks. When ready children are encouraged to feed themselves under supervision and to drink from a
                    sipper cup.
                </p>
                <p>
                    We are very respectful or family culture and values and under the direction of the parent we will make careful note of any
                    dietary needs and desires within reason. Please understand that we can not and will not refuse to provide a child with a snack
                    as a form of purnishment or outside of health concerns. Our home is open to people of all cultures and have experience with
                    various dietary practices (e.g vegans, vegiterian etc). <strong>It is imperative that you let us know of any known allergies or
                    dietary restrictions at the time of enrollement or as soon as it is known.</strong>
                </p>
              
                <Heading msg="Taxes & End of Year Statments"/>
                <p>
                    We are a family run daycare and do keep records of all payments and expenses associated with this type of business. Please
                    let us know if you require any written documentation for your tax purposes. The earlier the better as we will have to refer
                    such inquiries to our accountant. This may take a few days to be compiled so please do not expect to have a statement ready
                    immediately. We are a small entity and have to outsource this part of our business to an independent firm.
                </p>
               
                <Heading msg="Weather Policy"/>
                <p>
                    Living in the Pacific North West means pretty predictable weather but mother nature has been known to through us a curve ball
                    once in a while. We will post any closures on our website as soon as possible. Please use your best judgment when making decisions
                    regarding the weather. We will be closed for any dangerous weather situations.
                </p>

            </Container>
        )
    }
}